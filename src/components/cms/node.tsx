import { CmsEditable, type CmsLayoutComponent } from '@/lib/optimizely-cms/rsc'

export const VisualBuilderNode : CmsLayoutComponent = ({ data, children }) =>
{
    // Simplified node component - customize based on your needs
    return <CmsEditable as="div" className="visual-builder-node">
        { children }
    </CmsEditable>
}

export default VisualBuilderNode