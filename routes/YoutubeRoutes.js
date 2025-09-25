import express from 'express';
import YoutubeController from '../controllers/YoutubeController.js';

const router = express.Router();
const controle = new YoutubeController();

router.get('/youtube/add', controle.openAdd);
router.post('/youtube/add', controle.add);

router.get('/youtube/lst', controle.list);
router.post('/youtube/lst', controle.find);

router.get('/youtube/edt/:id', controle.openEdt);
router.post('/youtube/edt/:id', controle.edt);

router.get('/youtube/del/:id', controle.del);

export default router;
