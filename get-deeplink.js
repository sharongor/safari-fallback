export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        deepLink: "https://www.fnx.co.il" 
    });
}
