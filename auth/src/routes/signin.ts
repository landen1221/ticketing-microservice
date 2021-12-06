import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    console.log('signing in');
    res.send('Signging');
});

export { router as signinRouter };
