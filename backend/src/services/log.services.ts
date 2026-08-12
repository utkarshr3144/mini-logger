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

export const getLogsServices = async() => {

    const logs = await prisma.log.findMany({
        orderBy: {
            timestamp: "desc"
        }
    })
    return logs;
};