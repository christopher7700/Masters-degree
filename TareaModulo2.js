
db
show collections


const contents = [
    {
        content: "/Users/christopher/Downloads/movies.json",
        collection: "movies",
        idPolicy: "drop_collection_first", //overwrite_with_same_id|always_insert_with_new_id|insert_with_new_id_if_id_exists|skip_documents_with_existing_id|abort_if_id_already_exists|drop_collection_first|log_errors
        //Use the transformer to customize the import result
        //transformer: (doc)=>{ //async (doc)=>{
        //   doc["importDate"]= new Date()
        //   return doc; //return null skips this doc
        //}
    }
];

mb.importContent({
    connection: "localhost",
    database: "TareaModulo2",
    fromType: "file",
    batchSize: 2000,
    contents
})


//1 Analizar con find la coleccion 
db.movies.find()

//2 Contar cuantos documentos(peliculas) tien cargado
db.movies.find().count()

//3 Insertar una pelicula
