export default async function getProyects() {//Hscer el fetch de los proyectos
    try {
        const res = await fetch("/src/assets/projects.json");
        if (!res.ok) {
            throw new Error("Error al cargar los datos");
        }
        const data = await res.json();
        console.log(data.proyectos);
        return data;
    } catch (error) {
        console.error("Error en getProyects:", error);
        return null;
    }
}