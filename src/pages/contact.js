import RootLayout from '@/components/Layouts/RootLayout';


function ContactPage() {
    return (
        <>
            <p>Contact page</p>
        </>
    )
}

export default ContactPage;


ContactPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};