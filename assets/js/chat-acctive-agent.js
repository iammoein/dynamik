// Active Chat Agent
const chatAgents = document.querySelectorAll(".chat-agent");
const agentAvatars = document.querySelectorAll(".agent-online img");
const displayName = document.querySelector(".agent-name h6");
const displayUserStatus = document.querySelector(".agent-name small");

let selectedAvatarSrc = "avatar-sara.jpg";

const nameMap = new Map([
  ["Sara", "Ask Me About Everything"],
  ["Arsalan", "Ask Me About Tasks"],
  ["Romina", "Ask Me About Schedule"],
  ["Moein", "Ask Me About Risks"],
  ["Hossein", "Ask Me About Optimization"],
]);

const selectChatAgent = (chatAg, index) => {
  removeChatAgentActive();
  chatAg.classList.add("active");

  // Update selected avatar source
  selectedAvatarSrc = chatAg.querySelector("img").src;

  // Apply new avatar to all displayed agent images
  agentAvatars.forEach((img) => (img.src = selectedAvatarSrc));

  // Get agent name and status from the map
  const agentName = [...nameMap.keys()][index];
  const agentStatus = [...nameMap.values()][index];

  // Update UI elements
  displayName.textContent = agentName;
  displayUserStatus.textContent = agentStatus;
};

// Remove 'active' class from all chat agents
const removeChatAgentActive = () => {
  chatAgents.forEach((chatAg) => chatAg.classList.remove("active"));
};

// Attach click event to each chat agent
chatAgents.forEach((chatAg, index) => {
  chatAg.addEventListener("click", () => selectChatAgent(chatAg, index));
});
