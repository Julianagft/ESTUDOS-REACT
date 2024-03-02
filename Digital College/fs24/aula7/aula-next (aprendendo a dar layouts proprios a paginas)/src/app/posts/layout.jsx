//Só posso nomear como layout;

export const metadata = {
    title: "Aula de Next/ Posts",
  };

export default function PostLayout({children}) {
    return (
      <section >
            {children}
        </section>
    )
}