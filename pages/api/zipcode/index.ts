export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end('Enter zipcode in url e.g. /zipcode/99999')
}