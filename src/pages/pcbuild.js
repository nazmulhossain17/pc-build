import RootLayout from "@/components/Layouts/RootLayout";


function PcBuildPage() {
    return (
        <>
            <p>Pc build page</p>
        </>
    )
}

export default PcBuildPage;

PcBuildPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
