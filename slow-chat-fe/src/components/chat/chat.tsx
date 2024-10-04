import { Message } from "./message";

async function getCurrentUser() {
  return { id: 1, name: "Obi-Wan Kenobi" };
}
const BASE_API_URL = "http://localhost:4000";
async function getMessages() {
	const data = await fetch(`${BASE_API_URL}/messages`);
	const users = await data.json();
	console.log(users);
	return users;
}

export async function Chat() {
  const messages = await getMessages();
  const currentUser = await getCurrentUser();

  return (
    <article>
      <section className="py-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            currentUserId={currentUser.id}
            author={message.author}
            message={message.message}
          />
        ))}
      </section>

      <form className="form-control flex flex-row gap-2 w-full">
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Type a message"
          id="message"
          name="message"
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </article>
  );
}
