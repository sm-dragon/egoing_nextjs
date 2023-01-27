import { Count } from "@/components/Count";

const count =  {value : 25}

export default function handler(req, res) {
  console.log('req',req.body);
  console.log('method',req.method);

if(req.method === 'PATCH') {
  count.value = req.body.value;
}
    res.status(200).json(count);
  }
  