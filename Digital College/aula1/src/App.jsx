import CardIcon from "./components/CardIcon/CardIcon";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";



function App() {

    
    const culturas = [
        {   
            titulo: "Missão",
            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"
        },
        {
            titulo: "Visão",
            descricao: "Descricao 2 dolor sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"   
        },
        {
            titulo: "Valores",
            descricao: "Descricao 3 lorn ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"   
        },

        ];

    const cursos = [
        {   
            titulo: "FullStack",
            descricao: "FullStack sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"
        },
        {
            titulo: "PHP",
            descricao: "PHP dolor sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"   
        },
        {
            titulo: "Java",
            descricao: "JAVA 3 lorn ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi amet accusamus pariatur at sint minus, voluptates libero illum nobis odio porro impedit sequi deserunt veritatis rerum recusandae repellat. Molestiae?"   
        },

        ];


    return (
        <div>
            <Header />
            <main>
               <Section titulo="Sobre"> 

                    <div className="cards">
                    {culturas.map((cultura) => {
                        return (
                            <CardIcon titulo={cultura.titulo} descricao={cultura.descricao} />
                        )
                    })   }
                    </div>
                    
               </Section>

                <Section titulo="Cursos">
                    <div className="cards">
                    {cursos.map((curso) => {
                        return (
                            <CardIcon titulo={curso.titulo} descricao={curso.descricao} />
                        )
                    })   
                }
                    </div> 
                    
                </Section> 
                
            </main>
        </div> 
    )
}

export default App;