const { GREETING } = process.env;

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const name = event.body.name || "World";

  return {
    statusCode: 200,
    body: `${GREETING}, ${name}`
  };
};