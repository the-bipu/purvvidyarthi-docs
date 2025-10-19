import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_CODE);
const admin = process.env.ADMIN_MAIL || "";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, personalEmail, phone, professionalEmail, college, position, message } = formData;

    await resend.emails.send({
      from: "Purvvidyarthi Docs <onboarding@resend.dev>",
      to: [admin],
      subject: "Purvvidyarthi - Demo Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f3f7;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(102,51,153,0.1);">
            <h2 style="color: #663399; border-bottom: 3px solid #663399; padding-bottom: 10px; margin-bottom: 20px;">
              🎯 New Demo Request - Purvvidyarthi
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #552288; margin-bottom: 10px;">👤 Personal Information</h3>
              <div style="background-color: #faf9fb; padding: 15px; border-left: 4px solid #663399; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="margin: 5px 0;"><strong>Personal Email:</strong> <a href="mailto:${personalEmail}" style="color: #663399; text-decoration: none;">${personalEmail}</a></p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                ${professionalEmail ? `<p style="margin: 5px 0;"><strong>Professional Email:</strong> <a href="mailto:${professionalEmail}" style="color: #663399; text-decoration: none;">${professionalEmail}</a></p>` : ''}
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #552288; margin-bottom: 10px;">🏫 Organization Details</h3>
              <div style="background-color: #faf9fb; padding: 15px; border-left: 4px solid #8855bb; margin-bottom: 15px;">
                <p style="margin: 5px 0;"><strong>College/Institution:</strong> ${college}</p>
                <p style="margin: 5px 0;"><strong>Position:</strong> ${position}</p>
              </div>
            </div>

            ${message ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #552288; margin-bottom: 10px;">💬 Message</h3>
              <div style="background-color: #f3ebf9; border: 1px solid #d4c5e0; padding: 15px; border-radius: 5px;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
              </div>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e6dff0;">
              <p style="color: #777; font-size: 14px; margin: 0;">
                📅 Received on ${new Date().toLocaleDateString('en-US', {
                   weekday: 'long',
                   year: 'numeric',
                   month: 'long',
                   day: 'numeric'
                 })} at ${new Date().toLocaleTimeString('en-US')}
              </p>
              <p style="color: #999; font-size: 12px; margin-top: 10px;">
                From Purvvidyarthi Documentation Portal
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        Purvvidyarthi - New Demo Request
        
        PERSONAL INFORMATION
        ==================
        Full Name: ${fullName}
        Personal Email: ${personalEmail}
        Phone: ${phone}
        ${professionalEmail ? `Professional Email: ${professionalEmail}` : ''}
        
        ORGANIZATION DETAILS
        ===================
        College/Institution: ${college}
        Position: ${position}
        
        ${message ? `MESSAGE\n=======\n${message}\n` : ''}
        
        Received: ${new Date().toLocaleString()}
        Source: docs.purvvidyarthi.in
      `,
    });

    return NextResponse.json({ status: "ok", message: "Demo request sent successfully" });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send demo request" },
      { status: 500 }
    );
  }
}