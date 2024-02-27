import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequered from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequered, alunoController.store);
router.put('/:id', loginRequered, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequered, alunoController.delete);

export default router;
