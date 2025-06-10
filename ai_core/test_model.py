from gpt4all import GPT4All

def main():
    try:
        model = GPT4All("tinyllama.gguf", model_path="./ai_core/models")
        
        prompt = input("Enter a prompt: ")
        
        # Convert user input to completion format
        completion_prompts = [
            f"Complete this: {prompt}",
            f"Question: {prompt}\nAnswer:",
            f"The answer to '{prompt}' is",
            f"Explain: {prompt}",
            f"{prompt}. The explanation is:"
        ]
        
        # Try the most suitable format based on the prompt
        if "?" in prompt:
            formatted_prompt = f"Question: {prompt}\nAnswer:"
        elif prompt.lower().startswith(('what', 'how', 'why', 'when', 'where')):
            formatted_prompt = f"{prompt} The answer is:"
        else:
            formatted_prompt = f"Complete this: {prompt}"
        
        print(f"\nFormatted prompt: {formatted_prompt}")
        
        with model.chat_session():
            response = model.generate(formatted_prompt, max_tokens=150, temp=0.7)
            print(f"\nResponse: '{response}'")
            
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()