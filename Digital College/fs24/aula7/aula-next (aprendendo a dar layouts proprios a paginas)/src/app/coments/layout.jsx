
export const metadata = {
    title: "Aula de Next/Comentarios",
};

export default function ComentsLayout({children}) {
    return(
        <section className="bg-red-700">
            {children}
        </section>
    )
}