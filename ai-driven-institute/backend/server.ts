import { config } from "./src/config/config";
import app from "./src/app"
import connectDB from "./src/config/db";

const main = async()=>{
    
    // const PORT = parseInt(config.port ?? '3300', 10);
    const PORT = config.port || 3300;

    await connectDB();

    // app.listen(PORT,'0.0.0.0',()=>{
    //     console.log(`Listening on port ${PORT}`);
    // })
    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    })
}

main()