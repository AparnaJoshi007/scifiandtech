const { GREETING } = process.env;

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name } = JSON.parse(event.body) || "World";

  return {
    statusCode: 200,
    body: `${GREETING}, ${name}`
  };
};