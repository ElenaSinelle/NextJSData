export async function GET(request) {
  const data = {
    name: "Elena",
    surname: "Sinelnikova",
    age: "17",
    grade: "middle",
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request.body);
}
