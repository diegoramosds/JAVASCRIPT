import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.post('/', userController.store); // lista usuarios
// router.get('/', loginRequired, userController.index); // lista usuarios

router.get('/', userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index = lista todos os usuarios = GET
store/create = cria um novo usuario = POST
delete = apaga um usuario = DELETE
show = mostra um usuario = GET
update = atualiza um usuario = PATCH OU PUT
*/
