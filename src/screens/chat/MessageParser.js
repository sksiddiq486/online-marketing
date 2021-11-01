class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if(lowercase.includes("hello") ||lowercase.includes("hell0") ){
        this.actionProvider.greet("Hello friend.");
        this.actionProvider.greet("Welcome to digital marketing");
        this.actionProvider.greet("How can i help you");
      }

    }
  }

  export default MessageParser;