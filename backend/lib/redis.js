import 'dotenv/config'
import { Redis } from '@upstash/redis'
import dotenv from 'dotenv';


dotenv.config();

if (!process.env.UPSTASH_URL || !process.env.UPSTASH_TOKEN) {
  console.warn('UPSTASH_URL or UPSTASH_TOKEN is not set in environment. Redis client may fail.');
}

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
})
export default redis;