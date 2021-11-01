class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    greet=(data)=>{
        const message = this.createChatbotMessage(data);
        this.addMessageToState(message);

    }


    addMessageToState=(message)=>{
        this.setState((prevState)=>({
            ...prevState,
            messages:[...prevState.messages,message]
        }))

    }
  }
  
  export default ActionProvider;