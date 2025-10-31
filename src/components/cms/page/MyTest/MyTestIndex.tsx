'use client';
import { type CmsComponent } from "@/lib/optimizely-cms";
import { MyTestDataFragmentDoc, type MyTestDataFragment } from "@/gql/graphql";

/**
 * MyTest
 *
 */
export const MyTestComponent : CmsComponent<MyTestDataFragment> = ({ data, children }) => {
    // TODO: Implement your component logic here

    return (
        <div className="cms-mytest">
            <h2>MyTest</h2>
            {/* Add your component markup here */}
            {children}
        </div>
    );
}
MyTestComponent.displayName = "MyTest (page/MyTest)"
MyTestComponent.getDataFragment = () => ['MyTestData', MyTestDataFragmentDoc]

export default MyTestComponent
