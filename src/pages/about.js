import RootLayout from "@/components/Layouts/RootLayout";


function AboutPage() {
    return (
        <>
            <p>This is about page</p>
        </>
    )
}

export default AboutPage;


AboutPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};