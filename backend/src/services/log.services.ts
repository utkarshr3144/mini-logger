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
};

export const getLogsServices = async(
    level?: string,
    service?: string
) => {
    
    const logs = await prisma.log.findMany({
        where: {
            ...(level && { level }),
            ...(service && { service })
        },
        orderBy: {
            timestamp: "desc"
        }
    });

    return logs;
};