import Giscus from "@giscus/react";

export function CommentSection(props: {
  componentName: string
}) {
  return (
    <Giscus
      id='comments'
      repo='hungptsg/mini-projects'
      repoId='R_kgDOOKxbMQ'
      category='General'
      categoryId='DIC_kwDOOKxbMc4CoNiH'
      mapping='pathname'

      term={`Welcome to ${props.componentName} comment!`}
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='dark'
      lang='en'
      loading='lazy'
    />
  )
}