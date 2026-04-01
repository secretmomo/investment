import { sendCardMessage, sendTextMessage } from "@secret-momo/lark-notifier";
import { buildFundNavAnalysisCardMessage } from "./lark.template";
import { Xueqiu } from "./xueqiu";

async function main() {
  try {
    const xueqiu = new Xueqiu();
    const data = await xueqiu.analyzeFundNav("008163", "SH515450");

    await sendCardMessage(buildFundNavAnalysisCardMessage(data));
  } catch (e) {
    await sendTextMessage(`008163 task Error: ${e}`);
  }
}

await main();
