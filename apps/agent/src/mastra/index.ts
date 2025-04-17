import { Mastra } from '@mastra/core';
import { createLogger } from '@mastra/core/logger';
import { PlaywrightAgent } from './agents/playwright';
import { WeatherAgent } from './agents/weather';

export const mastra = new Mastra({
    logger: createLogger({
        name: 'Mastra',
        level: 'info'
    }),
    agents: {
        playwright: PlaywrightAgent,
        weather: WeatherAgent
    }
})
        