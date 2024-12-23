import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, designation, organization, theme, problem, description } = await req.json();

  if (!name || !email || !phone || !designation || !organization || !theme || !problem || !description) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      undefined,
      privateKey,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await auth.authorize();

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Sheet1!A1:H1";

    await google.sheets("v4").spreadsheets.values.append({
      auth,
      spreadsheetId: sheetId!,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            name,
            email,
            phone,
            designation,
            organization,
            theme,
            problem,
            description,
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Form data successfully submitted!" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
