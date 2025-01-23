// src/client.ts
import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: String(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID),
});
