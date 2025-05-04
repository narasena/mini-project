import { prisma } from "@/prisma";
import { ICreatorProfile } from "@/types/creator.profile.type";
import { generateCodeEightCharsMix } from "@/utils/code.generator/codeGeneratorEightCharsMix";

export async function generateProfileLink(memberId:string) {
    const code = generateCodeEightCharsMix()
    const expiredAt = new Date(Date.now() + 20 * 60 * 1000)

    const createProfileLink = await prisma.creatorProfile.create({
      data: {
        profileLinkUrl:code,
        member: { connect: { id: memberId } },
      },
    });
    return createProfileLink
}