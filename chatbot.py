import openai
from openai import AssistantEventHandler
from typing_extensions import override
from dotenv import load_dotenv
import os
import sys

# Load environment variables from .env file
load_dotenv()

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Initialize API key
client = openai.OpenAI(api_key=openai.api_key)

# Assistant ID
assistant_id = "your_assistant_id"

# Class to handle the response stream events
class EventHandler(AssistantEventHandler):
    @override
    def on_text_created(self, text) -> None:
        print(f"\nassistant > ", end="", flush=True)

    @override
    def on_text_delta(self, delta, snapshot):
        print(delta.value, end="", flush=True)

def get_response(user_input):
    # Start a Thread (conversation)
    thread = client.beta.threads.create()

    # Add the user message to the Thread
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=user_input
    )

    # Create and stream a Run
    with client.beta.threads.runs.stream(
        thread_id=thread.id,
        assistant_id=assistant_id,
        event_handler=EventHandler(),
    ) as stream:
        stream.until_done()

if __name__ == "__main__":
    user_input = sys.stdin.read().strip()
    get_response(user_input)
