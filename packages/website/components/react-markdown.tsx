import { PropsWithChildren, Children } from 'react'
import { getSpaceStyles } from '../lib/stylegen'
import { ElementName } from '../lib/types'


import markdown from 'markdown-it'
import mila from 'markdown-it-link-attributes'
import emoji from 'markdown-it-emoji'

// Custom plugins
import underline from '../lib/plugins/underline'


type InlineTypes = 'text' | 'newline' | 'escape' | 'backticks' | 'strikethrough' | 'emphasis' | 'link' | 'image' | 'autolink' | 'html_inline' | 'entity'
type BlockTypes = 'table' | 'code' | 'fence' | 'blockquote' | 'hr' | 'list' | 'reference' | 'heading' | 'lheading' | 'html_block' | 'paragraph'

type Props = PropsWithChildren<{
  $?: ElementName;
  inlineAllowed?: InlineTypes[];
  blockAllowed?: BlockTypes[];
  linkify?: boolean;
}>


export default ({ $="div", inlineAllowed=[], blockAllowed=[], linkify, children }: Props) => {
  const md =  new markdown('zero', {
    linkify
  })
  .use(underline)
  .use(emoji)
  .use(mila, {
    attrs: {
      target: '_blank',
      rel: 'noopener'
    }
  })
  md.enable(inlineAllowed).enable(blockAllowed)
  if(linkify) {
    md.enable('linkify')
    md.linkify.set({ fuzzyLink: false, fuzzyEmail: false })
  }
  
  const parsed = md.render(children?.toString() || '')
  return (
    <$ className="message-markdown" dangerouslySetInnerHTML={{
      __html: parsed
    }} />
  )
}
