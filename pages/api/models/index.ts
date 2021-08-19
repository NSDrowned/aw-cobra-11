export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end('Enter make ID in url e.g. /models/acura')
}