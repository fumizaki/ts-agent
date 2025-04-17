import { Agent } from "@mastra/core/agent";
import { google } from "../../models";
import { mcp } from "./mcp";


export const PlaywrightAgent = new Agent({
  name: 'PlaywrightAgent',
  model: google('gemini-2.0-flash-001'),
  tools: await mcp.getTools(),
  instructions: 'あなたはwebサイトにアクセスして情報を取得するエージェントです。'
})