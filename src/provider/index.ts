import { createProvider } from '@builderbot/bot';
import { ProviderClass } from '@builderbot/bot';  // Asegúrate de que esto esté correctamente importado

import { TelegramProvider } from '@builderbot-plugins/telegram'; // Importa el proveedor de Telegram

// Configura el proveedor de Telegram
export const provider = createProvider(TelegramProvider, {
  token: process.env.TELEGRAM_BOT_TOKEN,  // Asegúrate de tener el token del bot en tus variables de entorno
}) as unknown as ProviderClass<any>;
