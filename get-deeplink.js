export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        deepLink: "https://pinfo-mobileapp-services.fnx.co.il/onelink/navigate/TreatmentSubjectsScreen" 
    });
}
