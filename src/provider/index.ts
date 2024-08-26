import { createProvider } from '@builderbot/bot';
import { TelegramProvider } from '@builderbot-plugins/telegram'; // Importa el proveedor de Telegram

// Configura el proveedor de Telegram
export const provider = createProvider(TelegramProvider, {
  botToken: process.env.TELEGRAM_BOT_TOKEN,  // Asegúrate de tener el token del bot en tus variables de entorno
}) as unknown as ProviderClass<any>;
