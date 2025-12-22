// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// // Initialize Resend with API key from environment variables
// const resend = new Resend(process.env.RESEND_API_KEY);

// // Rate limiting (simple in-memory store - use Redis in production)
// const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// function checkRateLimit(ip: string): boolean {
//   const now = Date.now();
//   const limit = rateLimitMap.get(ip);

//   if (!limit || now > limit.resetTime) {
//     rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
//     return true;
//   }

//   if (limit.count >= 3) {
//     return false; // Max 3 requests per minute
//   }

//   limit.count++;
//   return true;
// }

// export async function POST(request: NextRequest) {
//   try {
//     // Get IP for rate limiting
//     const ip = request.headers.get("x-forwarded-for") || "anonymous";

//     // Check rate limit
//     if (!checkRateLimit(ip)) {
//       return NextResponse.json(
//         { error: "Too many requests. Please try again later." },
//         { status: 429 }
//       );
//     }

//     // Parse request body
//     const body = await request.json();
//     const { name, email, message } = body;

//     // Validate input
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     if (typeof name !== "string" || name.length < 2) {
//       return NextResponse.json(
//         { error: "Name must be at least 2 characters" },
//         { status: 400 }
//       );
//     }

//     if (typeof email !== "string" || !email.includes("@")) {
//       return NextResponse.json(
//         { error: "Please provide a valid email address" },
//         { status: 400 }
//       );
//     }

//     if (typeof message !== "string" || message.length < 10) {
//       return NextResponse.json(
//         { error: "Message must be at least 10 characters" },
//         { status: 400 }
//       );
//     }

//     // Check if Resend API key is configured
//     if (!process.env.RESEND_API_KEY) {
//       console.error("RESEND_API_KEY is not configured");

//       // Log to console in development (remove in production)
//       console.log("Contact form submission:", { name, email, message });

//       // Return success anyway for demo purposes
//       return NextResponse.json(
//         {
//           message: "Message received (Demo mode - email not sent)",
//           data: { name, email },
//         },
//         { status: 200 }
//       );
//     }

//     // Send email using Resend
//     const data = await resend.emails.send({
//       from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
//       to: process.env.RESEND_TO_EMAIL || "your.email@example.com",
//       subject: `Portfolio Contact: ${name}`,
//       replyTo: email,
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="utf-8">
//             <style>
//               body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//               .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//               .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
//               .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
//               .field { margin-bottom: 20px; }
//               .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
//               .value { padding: 10px; background: white; border-left: 3px solid #667eea; border-radius: 4px; }
//               .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header">
//                 <h1>New Contact Form Submission</h1>
//               </div>
//               <div class="content">
//                 <div class="field">
//                   <div class="label">From:</div>
//                   <div class="value">${name}</div>
//                 </div>
//                 <div class="field">
//                   <div class="label">Email:</div>
//                   <div class="value"><a href="mailto:${email}">${email}</a></div>
//                 </div>
//                 <div class="field">
//                   <div class="label">Message:</div>
//                   <div class="value">${message.replace(/\n/g, "<br>")}</div>
//                 </div>
//               </div>
//               <div class="footer">
//                 <p>This message was sent from your portfolio contact form</p>
//               </div>
//             </div>
//           </body>
//         </html>
//       `,
//     });

//     return NextResponse.json(
//       { message: "Message sent successfully", data },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to send message. Please try again later." },
//       { status: 500 }
//     );
//   }
// }
