import {prisma} from "../../lib/prisma.js";

export const createLogServices = async(
    level: string,
    message: string,
    service: string,
    metaData: any
) => {
    const log = await prisma.log.create({
        data: {
            level,
            message,
            service,
            metaData
        }
    })
    return log;
}