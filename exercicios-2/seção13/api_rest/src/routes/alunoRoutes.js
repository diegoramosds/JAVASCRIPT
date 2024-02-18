import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequered from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequered, alunoController.index);
router.post('/', loginRequered, alunoController.store);
router.put('/:id', loginRequered, alunoController.update);
router.get('/:id', loginRequered, alunoController.show);
router.delete('/:id', loginRequered, alunoController.delete);

export default router;
