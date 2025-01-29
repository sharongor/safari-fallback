export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": process.env.APP_ID, // Load from ENV variable
                    "paths": [ "/pinfoapp/*" ]
                }
            ]
        }
    });
}
