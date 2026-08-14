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
    service?: string,
    page: number = 1,
    limit: number = 10
) => {
    const skip = (page - 1) * limit;

    const logs = await prisma.log.findMany({
        where: {
            ...(level && { level }),
            ...(service && { service })
        },
        orderBy: {
            timestamp: "desc"
        },
        skip, 
        take: limit
    });

    return logs;
};