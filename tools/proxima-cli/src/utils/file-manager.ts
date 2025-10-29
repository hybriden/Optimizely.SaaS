import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { Logger } from './logger';

export class FileManager {
  /**
   * Check if a file contains the @not-modified marker
   */
  static async isModified(filePath: string): Promise<boolean> {
    try {
      if (!await fs.pathExists(filePath)) {
        return false; // File doesn't exist, so it's not modified
      }

      const content = await fs.readFile(filePath, 'utf-8');
      return !content.includes('@not-modified');
    } catch (error) {
      return false;
    }
  }

  /**
   * Write file with optional preservation of existing content
   */
  static async writeFile(
    filePath: string,
    content: string,
    options: { force?: boolean; preserveModified?: boolean } = {}
  ): Promise<boolean> {
    const { force = false, preserveModified = true } = options;

    try {
      // Ensure directory exists
      await fs.ensureDir(path.dirname(filePath));

      // Check if file exists and is modified
      if (await fs.pathExists(filePath)) {
        const isModified = await this.isModified(filePath);

        if (isModified && preserveModified && !force) {
          Logger.warning(`Skipping ${filePath} (file has been modified)`);
          return false;
        }
      }

      // Write the file
      await fs.writeFile(filePath, content, 'utf-8');
      return true;
    } catch (error) {
      Logger.error(`Failed to write ${filePath}: ${error}`);
      return false;
    }
  }

  /**
   * Read file content
   */
  static async readFile(filePath: string): Promise<string | null> {
    try {
      if (!await fs.pathExists(filePath)) {
        return null;
      }
      return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      Logger.error(`Failed to read ${filePath}: ${error}`);
      return null;
    }
  }

  /**
   * Find files matching a pattern
   */
  static async findFiles(pattern: string, cwd: string): Promise<string[]> {
    try {
      return await glob(pattern, { cwd, absolute: true });
    } catch (error) {
      Logger.error(`Failed to find files matching ${pattern}: ${error}`);
      return [];
    }
  }

  /**
   * Ensure directory exists
   */
  static async ensureDir(dirPath: string): Promise<void> {
    await fs.ensureDir(dirPath);
  }

  /**
   * Check if path exists
   */
  static async pathExists(filePath: string): Promise<boolean> {
    return await fs.pathExists(filePath);
  }

  /**
   * Read JSON file
   */
  static async readJson<T>(filePath: string): Promise<T | null> {
    try {
      if (!await fs.pathExists(filePath)) {
        return null;
      }
      return await fs.readJson(filePath);
    } catch (error) {
      Logger.error(`Failed to read JSON from ${filePath}: ${error}`);
      return null;
    }
  }

  /**
   * Write JSON file
   */
  static async writeJson(
    filePath: string,
    data: any,
    options: { force?: boolean; preserveModified?: boolean } = {}
  ): Promise<boolean> {
    const content = JSON.stringify(data, null, 2);
    return await this.writeFile(filePath, content, options);
  }
}
