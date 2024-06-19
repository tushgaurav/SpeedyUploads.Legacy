import { BlobServiceClient } from "@azure/storage-blob";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { base64Image } = data;

    const containerName = "files";

    // Upload
    console.log("::UPLOADING IMAGE::");
    const connectionString = `DefaultEndpointsProtocol=https;AccountName=speedyuploads;AccountKey=CscI9e3mEx/uzUHRichSimjwdnXAVAdk4hKHW/+zuf8ajQl8mrL8527IcGtDuPAE0pw1xTaAYyer+AStZ6YuLg==;EndpointSuffix=core.windows.net`;

    const blobServiceClient =
      BlobServiceClient.fromConnectionString(connectionString);

    const containerClient = blobServiceClient.getContainerClient(containerName);
    const filename = `${Date.now()}.png`;
    const imageBuffer = Buffer.from(base64Image, "base64");
    const blockBlobClient = containerClient.getBlockBlobClient(filename);
    const info = await blockBlobClient.uploadData(imageBuffer, {
      blobHTTPHeaders: { blobContentType: "image/png" },
    });

    // Get url of the uploaded image
    const url = blockBlobClient.url;

    console.log(url);
    return Response.json({ message: "Success", url });
  } catch (error) {
    return Response.json({ message: "Error" });
  }
}
