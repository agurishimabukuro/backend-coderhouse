import "../configs/db.config";
import { UsuariosModel } from "../modelos/usuarios.modules";
import logger from "../loggers/Log4jsLogger.js";

export class UsuarioService {

    ID_FIELD = "_id";
    USERNAME_FIELD = 'username';
    
    async createUser(object) {
        try {
            return await UsuariosModel.create(object);
        } catch (error) {
            logger.error(error);
            return null;
        }
    }
    
    async loginUser(object) {
        try {
            const user = await UsuariosModel.findOne({
                [this.USERNAME_FIELD] : object.username
            });
            
            if (!user) {
                logger.info(`User '${object.username}' does not exist`)
                return null;   
            } 
            
            return await user.comparePassword(object.password);
        
        } catch (error) {
            logger.error(error);
            return null;
        }
    }
}