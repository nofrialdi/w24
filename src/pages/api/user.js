export default function handler(req, res) {
    console.log(req.body, 'req.body')
    const todos = []
    const { method } = req;
    switch (method) {
        case "GET":
            res.status(200).json(todos);
            break;
        case "POST":
            const { todo, completed } = req.body;
            todos.push({
                id: todos.length + 1,
                todo,
                completed,
            });
            res.status(200).json(todos);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}