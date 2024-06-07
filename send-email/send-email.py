import boto3, json
sender = "andrewmgrube@gmail.com"

def send_email(name, email, phone, message):
    body = "\n"+"Name: " + name +"\n"+"E-Mail: " + email +"\n"+"Phone Number: " + phone + "\n" + "Message: " + message
    print(body)
    client = boto3.client('ses', region_name='us-east-1')
    response = client.send_email(
        Source=sender,
        Destination={
            'ToAddresses': [sender]
        },
        Message={
            'Subject': {
                'Data': "New E-Mail from " + name
            },
            'Body': {
                'Text': {
                    'Data': body
                }
            }
        }
    )
    return response['MessageId']

def lambda_handler(event, context):
    body = json.loads(event['body'])
    name = body['name']
    email = body['email']
    phone = body['phone']
    message = body['message']
    send_email(name, email, phone, message)

# Example usage
# subject = "Hello from AWS Lambda"
# body = "This is the body of the email."
# sender = "andrewmgrube@gmail.com"
# recipient = "recipient_email@example.com"

# send_email(subject, body, sender, recipient)