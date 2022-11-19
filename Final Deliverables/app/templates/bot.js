  window.watsonAssistantChatOptions = {
    integrationID: "9483e972-b992-442a-81fa-deda501cfdfc", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "2391056d-97be-4581-8334-1045e27247d1", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });