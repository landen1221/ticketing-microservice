import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    console.log('Signing Out');
    res.send('Signing Out!');
});

export { router as signoutRouter };
